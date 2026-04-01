/*
 * @Author: CL
 * @Date: 2026-03-31 16:01:49
 * @LastEditTime: 2026-04-01 11:00:30
 * @Description: 服务器返回格式
 * 有三种格式，发生错误，正常数据，分页数据
 */

import { Response } from 'express'

class ResponseResult {
  /**
   * 发生错误
   */
  public static sendError(errs: string [] | string, res: Response) {
    let temp: string = Array.isArray(errs) ? errs.join(',') : errs
    
    res.send({
      code: -1,
      error: temp,
      data: null
    })
  }

  /**
   * 正常情况
   * @param data 
   */
  public static sendData(data: any, res: Response) {
    res.send({
      code: 1,
      data,
      error: null
    })
  }

  /**
   * 分页数据
   * @param data 
   * @param total 
   * @param res 
   */
  public static sendPageData<T>(data: T[], total: number, res: Response) {
    res.send({
      data,
      total
    })
  }
}

export default ResponseResult