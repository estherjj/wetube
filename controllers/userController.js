import routes from "../routes";

export const getJoin = (req, res) => {
    res.render("join", {pageTitle: "Join"});
}

export const postJoin = (req, res) => {
    const {
        body: {name, email, password, password2}
    } = req;
    if (password!==password2) {
        res.status(400); //서버가 잘못된 요청(400)이라는 상태코드를 전달
    } else {
        // To Do: Register User (할일: 사용자 등록)
        // To Do: Log user in (할일: 사용자 로그인)
        res.redirect(routes.home) //비밀번로가 서로 같으면 로그인이 되어 home 페이지로 redirect 함
    }
    res.render("join", {pageTitle: "Join"});
}


export const getLogin = (req, res) => res.render("login", {pageTitle: "Login"});
export const postLogin = (req, res) => {
    res.redirect(routes.home);
}


export const logout = (req, res) => {
    // To Do: process Logout (로그아웃 처리)
    res.redirect(routes.home);
}
export const users = (req, res) => res.render("users", {pageTitle: "Users"});
export const userDetail = (req, res) => res.render("userDetail", {pageTitle: "User Detail"});
export const editProfile = (req, res) => res.render("editProfile", {pageTitle: "Edit Profile"});
export const changePassword = (req, res) => res.render("changePassword", {pageTitle: "Change Password"});