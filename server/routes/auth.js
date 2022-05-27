const router = require("express").Router();
const passport = require("passport");

const CLIENT_URL = "http://localhost:3000/";

const users = [
    {
        id: "1",
        username: "john",
        password: "John0989",
        isAdmin: true,
    },
    {
        id: "2",
        username: "budi",
        password: "Budi0989",
        isAdmin: false,
    },
];

const generateAccessToken = (user) => {
    return jwt.sign({ id: user.id, isAdmin: user.isAdmin }, "MySecretKey", {
        expiresIn: "60s",
    });
};

router.post("/login", (req, res) => {
    const { username, password } = req.body;
    const user = users.find((user) => {
        return user.username === username && user.password === password;
    });
    if (user) {
        // Generate access token
        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);
        // push to array
        refreshTokens.push(refreshToken);
        // response
        res.json({
            username: user.username,
            isAdmin: user.isAdmin,
            accessToken,
            refreshToken,
        });
    } else {
        res.status(400).json("Username or password incorrect!");
    }
});

router.get("/login/success", (req, res) => {
    if (req.user) {
        res.status(200).json({
            success: true,
            message: "successfull",
            user: req.user,
            //   cookies: req.cookies
        });
    }
});

router.get("/login/failed", (req, res) => {
    res.status(401).json({
        success: false,
        message: "failure",
    });
});

router.get("/logout", (req, res) => {
    req.logout();
    res.redirect(CLIENT_URL);
});

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
    "/google/callback",
    passport.authenticate("google", {
        successRedirect: CLIENT_URL,
        failureRedirect: "/login/failed",
    })
);

router.get("/github", passport.authenticate("github", { scope: ["profile"] }));

router.get(
    "/github/callback",
    passport.authenticate("github", {
        successRedirect: CLIENT_URL,
        failureRedirect: "/login/failed",
    })
);

// router.get("/facebook", passport.authenticate("facebook", { scope: ["profile"] }));

// router.get(
//   "/facebook/callback",
//   passport.authenticate("facebook", {
//     successRedirect: CLIENT_URL,
//     failureRedirect: "/login/failed",
//   })
// );

module.exports = router;
