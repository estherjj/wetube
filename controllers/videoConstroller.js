import {videosFiles} from "../db"
import routes from "../routes"

export const home = (req, res) => {
    res.render("home", {pageTitle: "Home", videosFiles});
};

export const search = (req, res) => {
    const {query: {term: searchingBy}} = req;  //searchingBy는 req.query.term과 같음
    res.render("search", {pageTitle: "Search", searchingBy: searchingBy, videosFiles});
};

export const videos = (req, res) => res.render("videos", {pageTitle: "Videos"});

export const getUpload = (req, res) => res.render("upload", {pageTitle: "Upload"});
export const postUpload = (req, res) => {
    const {
        body: {
            file, title, description
        }
    } = req;
    // To Do: Upload and save video (할일: 비디오 업로드 및 저장)
    res.redirect(routes.videoDetail(234432));
}

export const videoDetail = (req, res) => res.render("videoDetail", {pageTitle: "Video Detail"});

export const editVideo = (req, res) => res.render("editVideo", {pageTitle: "Edit Video"});

export const deleteVideo = (req, res) => res.render("deleteVideo", {pageTitle: "Delete Video"});