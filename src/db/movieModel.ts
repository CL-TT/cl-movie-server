/*
 * @Author: CL
 * @Date: 2026-03-30 18:47:53
 * @LastEditTime: 2026-03-30 23:50:02
 * @Description: 数据库 电影模型
 */

import { Document, Schema, model } from 'mongoose'
import Movie from '../model/Movie'

export interface IMovie extends Movie, Document {}

// 定义电影的数据结构
const movieSchema = new Schema<IMovie>({
  name: String,
  type: [String],
  time: Number,
  isHot: Boolean,
  desc: String,
  pic: String
}, {
  versionKey: false
})

// 创建电影的模型
const MovieModel = model<IMovie>('Movie', movieSchema)

export default MovieModel