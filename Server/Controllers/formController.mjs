import formSchema from "../Models/formSchema.mjs";



export const createForm = async(req,res)=>{
    try {
        // Get the form data from the request body
        const { questions, name, description, formType } = req.body;
    
        // Create a new form data object
        const formData = new formSchema({
          createdBy: req.user.id, // Assuming you have user information available
          name,
          description,
          questions,
          formType,
        });
    
        // Save the form data to MongoDB
        await formData.save();
    
        res.status(201).json(formData); // Return the saved form data as a response
      } catch (error) {
        console.error("Error saving form data:", error);
        res.status(500).json({ message: "Error saving form data" });
      }
    }
