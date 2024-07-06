import User from "../model/userModel.js"
// For posting data into database 
export const create = async(req, res)=>{
    try {
        const userData = new User( req.body );
        const {title} = userData;
        const userExist = await User.findOne({title})
        if (userExist){
            return res.status(400).json({message : "User already exist."})
        }
        const savedUser = await userData.save();
        res.status(200).json(savedUser)
    } catch (error) {
        res.status(500).json({error : "Internal Server Error. "})
    }
}

// For getting all users from database 
export const fetch = async (req, res)=>{
    try {
        const users = await User.find();
        if(users.length === 0 ){
            return res.status(404).json({message : "User not Found."})
        }
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({error : " Internal Server Error. "})
    }
}
// For updating data 
export const update = async (req, res)=>{
    try {
        const id = req.params.id;
        const userExist = await User.findOne({_id:id})
        if (!userExist){
            return res.status(404).json({message : "User not found."})
        }
        // const updateUser = await User.findByIdAndUpdate(id, req.body, {new : true});
        const updateUser = await User.findByIdAndUpdate({_id:id}, req.body, {
            name : req.body.title,
            email: req.body.author,
            address: req.body.year});
        res.status(201).json(updateUser);
    } catch (error) {
        res.status(500).json({error : " Internal Server Error. "})
    }
}
// For getting a single post
export const getSinglePost = async (req, res)=>{
    const id = req.params.id;
    User.findById({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))

    // try {
    //     const users = await User.find();
    //     if(users.length === 0 ){
    //         return res.status(404).json({message : "User not Found."})
    //     }
    //     res.status(200).json(users);
    // } catch (error) {
    //     res.status(500).json({error : " Internal Server Error. "})
    // }
}


// For deleting data from database 
export const deleteUser = async (req, res)=>{
    try {
        const id = req.params.id;
        const userExist = await User.findOne({_id:id})
        if(!userExist){
            return res.status(404).json({message : " User Not Found. "})
        }
        await User.findByIdAndDelete(id);
        res.status(201).json({message : " User deleted Successfully."})
    } catch (error) {
        res.status(500).json({error : " Internal Server Error. "})
    }
}


