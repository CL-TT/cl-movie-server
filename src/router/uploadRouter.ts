/*
 * @Author: CL
 * @Date: 2026-04-01 16:01:40
 * @LastEditTime: 2026-04-01 16:58:41
 * @Description: 文件上传的路由
 */

import Express from 'express'
import multer from 'multer'
import path from 'path'
import ResponseResult from './ResponseResult'
// import { v4 as uuidv4 } from 'uuid'

const router = Express.Router()

const storage = multer.diskStorage({
  // 保存的位置
  destination(req, file, cb) {
    cb(null, path.resolve(__dirname, '../../public/upload'))
  },
  // 文件名称
  filename(req, file, cb) {
    const ext = path.extname(file.originalname) // 拿到原文件的后缀名
    cb(null, `${ new Date().getTime() }${ext}`)
  }
})

const upload = multer({
  storage,
  // 上传文件的类型限制
  fileFilter(req, file, cb) {
    const allowExt = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
    const fileExt = path.extname(file.originalname).toLowerCase();
  
    if (allowExt.includes(fileExt)) {
      cb(null, true);
    } else {
      cb(new Error('仅支持后缀为 jpg/png/gif/webp 的图片'));
    }
  },
  limits: {
    fileSize: 1024 * 1024 * 2
  }
}).single('img')

router.post('/', async (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      let msg: string = err.code === 'LIMIT_FILE_SIZE' ? '上传的图片大小不能超过2MB' : err.message
      ResponseResult.sendError(msg, res)
    } else {
      let path = `/download/${req.file?.filename}`
      ResponseResult.sendData(path, res)
    }
  })
})

export default router
