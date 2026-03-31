/*
 * @Author: CL
 * @Date: 2026-03-31 15:46:07
 * @LastEditTime: 2026-03-31 18:16:41
 * @Description: 电影接口
 */

import Express, { Response, Request } from 'express'
import MovieService from '../service/movieService'
import ResponseResult from './ResponseResult'

const router = Express.Router()

/**
 * 根据id来获取电影数据
 */
router.get('/', (req, res: Response) => {
  // const result = await MovieService.findById(req.params.id)
  // ResponseResult.sendError(['错误了'], res)
  res.send('hahah')
})

export default router