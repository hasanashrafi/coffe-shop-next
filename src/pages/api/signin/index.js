import User from "@/models/User";
import  connectDB  from "@/utils/connectDB";

export default async function handler(req, res) {
    await connectDB();

    if (req.method === "POST") {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(401).json({
                message: "Invalid password",
                success: false
            });
        }
        res.status(200).json({
            message: "User logged in successfully",
            success: true,
            user: user
        });
    }
    else {
        res.status(405).json({ 
            message: "Method not allowed" });
    }


}