import routes from "../routes";
import video from "../models/video";

export const home = async(req, res) => {
   try {
    const videos = await video.find({});
    res.render("home", {pageTitle: "Home", videos});
   } catch(error) {
       console.log(error);
       res.render("home", {pageTitle: "Home", videos: []});
   }
};

export const search = (req, res) => {
    const {query: {term: searchingBy}} = req;  //searchingBy는 req.query.term과 같음
    res.render("search", {pageTitle: "Search", searchingBy: searchingBy, videos});
};

export const videos = (req, res) => res.render("videos", {pageTitle: "Videos"});

export const getUpload = (req, res) => res.render("upload", {pageTitle: "Upload"});
export const postUpload = async(req, res) => {
    const {
        body: {title, description},
        file: {path}
    } = req;
    const newVideo = await video.create({
        fileUrl: path,
        title,
        description
    });
    console.log(newVideo)
    // To Do: Upload and save video (할일: 비디오 업로드 및 저장)
    res.redirect(routes.videoDetail(newVideo.id));

}

export const videoDetail = (req, res) => res.render("videoDetail", {pageTitle: "Video Detail"});

export const editVideo = (req, res) => res.render("editVideo", {pageTitle: "Edit Video"});

export const deleteVideo = (req, res) => res.render("deleteVideo", {pageTitle: "Delete Video"});