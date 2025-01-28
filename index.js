const express  =  require("express")
const colors = require("colors")

const app = express()

const port = process.env.PORT || 3000

app.get("/", (req, res) => {
    console.log(colors.america("Node Docker app is live"))
    res.status(200).json({
        success: true,
        message: "Node Docker app is live!!!"
    })
})

app.listen(port, () => {
    console.log(colors.blue(`Server listening on port ${port}`))
})

