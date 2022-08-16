export const getTasks = async (req, res) => {
    try {
        res.render('home')
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}