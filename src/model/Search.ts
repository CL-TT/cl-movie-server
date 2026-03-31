/*
 * @Author: CL
 * @Date: 2026-03-31 11:34:52
 * @LastEditTime: 2026-03-31 12:50:16
 * @Description: 电影搜索实体
 */

import { IsNotEmpty, IsInt, Min } from 'class-validator'
import { Type } from 'class-transformer'
import Base from './Base'

class Search extends Base {
  @IsNotEmpty({ message: '参数page不能为空' })
  @IsInt({ message: '参数page应为整数' })
  @Min(1, { message: '参数page不能小于1' })
  @Type(() => Number)
  public page: number = 1

  @IsNotEmpty({ message: '参数size不能为空' })
  @IsInt({ message: '参数size应为整数' })
  @Min(1, { message: '参数size不能小于1' })
  @Type(() => Number)
  public size: number = 10

  @Type(() => String)
  public searchKey: string = ''


  /**
   * 把平面对象转换成类对象
   */
  public static plainObjtransformer(plainObj: object):Search {
    return super.basePlainObjtransformer(Search, plainObj)
  }
}

export default Search
