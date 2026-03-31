/*
 * @Author: CL
 * @Date: 2026-03-31 11:44:45
 * @LastEditTime: 2026-03-31 12:09:53
 * @Description: 公共类
 */

import { validate } from 'class-validator'
import { plainToInstance } from 'class-transformer'

abstract class Base {
  /**
   * 验证当前对象
   * 返回的是一个错误信息的数组，验证通过返回的就是一个空数组
   */
  public async volidatorThis(skip = false): Promise<string []>{
    const errsArr = await validate(this, {
      skipMissingProperties: skip
    })

    let t = errsArr.map(item => Object.values(item.constraints || {}))

    let errResult: string [] = []

    t.forEach(item => {
      errResult.push(...item)
    })

    return errResult
  }

  /**
   * 把平面对象转换成类对象
   */
  protected static basePlainObjtransformer<T>(classType: new (...args: any) => T, plainObj: object): T {
    if (plainObj instanceof classType) {
      return plainObj
    }

    return plainToInstance(classType, plainObj)
  }
}

export default Base
