import routes from "../routes";
import video from "../models/video";

export const home = async(req, res) => {
   try {
    const videos = await video.find({}).sort({_id: -1}); //최신순 정렬을 위한 sort()
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

export const videoDetail = async (req, res) => {
    const {
        params: {id}
    } = req;
    try {
        const vvideo = await video.findById(id);
        res.render("videoDetail", {pageTitle: vvideo.title, vvideo});
    } catch(error) {
        res.redirect(routes.home)
    }
}
export const getEditVideo = async(req, res) => {
    const {
        params: {id}
    } = req;
    try {
        const vvideo = await video.findById(id);
        res.render("editVideo", {pageTitle: `Edit ${vvideo.title}`, vvideo});
    } catch (error) {
        res.redirect(routes.home)
    }
}

export const postEditVideo = async(req, res) => {
    const {
        params: {id},
        body: {title, description}
    } = req;
    try {
        await video.findOneAndUpdate({_id: id}, {title, description});
        res.redirect(routes.videoDetail(id));
    } catch (error) {
        res.redirect(routes.home);
    }
}


export const deleteVideo = async(req, res) => {
    const {
        params: {id}
    }=req;
    try {
        await video.findOneAndRemove({_id: id});
    }catch(error) {}
        res.redirect(routes.home);
}