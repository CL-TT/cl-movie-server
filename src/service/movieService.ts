/*
 * @Author: CL
 * @Date: 2026-03-30 23:47:08
 * @LastEditTime: 2026-03-31 12:50:53
 * @Description: 电影增删改查逻辑类
 */

import MovieModel, { IMovie } from "../db/movieModel";
import Movie from "../model/Movie";
import Search from "../model/Search";
import { searcgResult } from "../types";

export default class MovieService {
  /**
   * 添加电影
   */
  public static async add(movie: object):Promise<IMovie | string []> {
    // 1. 把平面对象转化为类
    let transformer = Movie.plainObjtransformer(movie)

    // 2. 验证数据
    let errs = await transformer.volidatorThis()
    if (errs.length > 0) {
      return errs
    }
    // 3. 把数据添加到数据库
    return await MovieModel.create(transformer)
  }

  /**
   * 修改电影数据
   * @param id 数据id
   * @param movie 修改后的数据
   */
  public static async edit(id: string, movie: object):Promise<IMovie | string [] | null> {
    let transformer = Movie.plainObjtransformer(movie)
    let errs = await transformer.volidatorThis(true)
    if (errs.length > 0) {
      return errs
    }
    return await MovieModel.findByIdAndUpdate(id, transformer,{ new: true })
  }

  /**
   * 删除电影数据
   * @param id
   */
  public static async del(id: string): Promise<IMovie | null> {
    return await MovieModel.findByIdAndDelete(id)
  }

  /**
   * 根据电影id查找电影数据
   * @param id
   */
  public static async findById(id: string): Promise<IMovie | null> {
    return await MovieModel.findById(id)
  }

  /**
   * 按条件的分页查询
   * @param search
   */
  public static async findBySearch(search: object): Promise<searcgResult<IMovie> | string []> {
    // 转换平面对象
    const searchObj = Search.plainObjtransformer(search)

    const { page, size, searchKey } = searchObj
    // 校验
    const errs = await searchObj.volidatorThis()
    if (errs.length > 0) {
      return errs
    }

    // 条件分页查询
    const res = await MovieModel.find({ name: {$regex: searchKey, $options: 'i'} })
    .skip((page - 1) * size).limit(size)

    const total = await MovieModel.find({ name: {$regex: searchKey, $options: 'i'} })
    .countDocuments()

    return {
      total,
      data: res
    }
  }
}
