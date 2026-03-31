/*
 * @Author: CL
 * @Date: 2026-03-31 16:01:49
 * @LastEditTime: 2026-03-31 16:26:55
 * @Description: 服务器返回格式
 */

import { Response } from 'express'

class ResponseResult {
  /**
   * 发生错误
   */
  public static sendError(errs: string [] = [], res: Response) {
    let temp: string = ''
    temp = errs.join(',')
    res.send({
      code: -1,
      error: temp,
      data: null
    })
  }
}

export default ResponseResult