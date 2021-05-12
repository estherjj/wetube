import multer from "multer";
import routes from "./routes";

const multerVideo = multer({dest: "uploads/videos/"});

export const localMiddleware = (req, res, next) => {
    res.locals.siteName = "WeTube";
    res.locals.routes = routes; 
    res.locals.user = {
        isAuthenticated: true,
        id: 1
    }
    next();
}

export const uploadVideo = multerVideo.single("videoFile");
 //single은 오직 하나의 파일만 업로드 할수있음을 의미함.