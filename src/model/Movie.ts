/*
 * @Author: CL
 * @Date: 2026-03-28 22:12:42
 * @LastEditTime: 2026-03-31 12:17:54
 * @Description: 电影实体类
 */

import { IsNotEmpty, Length, ArrayMinSize, IsInt, Min, validate } from 'class-validator'
import { Type, plainToInstance } from 'class-transformer'
import Base from './Base'

class Movie extends Base {
  @IsNotEmpty({ message: '电影名称不能为空' })
  @Length(1, 20, { message: '电影名称的长度在1-20个字符之间' })
  @Type(() => String)
  public name: string

  @IsNotEmpty({ message: '电影类型不能为空' })
  @ArrayMinSize(1, { message: '电影类型至少选一样' })
  public type: string[]

  @IsNotEmpty({ message: '电影时长不能为空' })
  @IsInt({ message: '电影时长必须为整数' })
  @Min(1, { message: '电影时长不能小于1分钟' })
  public time: number

  @IsNotEmpty({ message: '是否热映不能为空' })
  public isHot: boolean

  public desc?: string  // 简介

  public pic?: string   // 图片

  /**
   * 把平面对象转换成类对象
   */
  public static plainObjtransformer(plainObj: object): Movie {
    return super.basePlainObjtransformer(Movie, plainObj)
  }
}

export default Movie