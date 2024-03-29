const { Schema, model } = require("mongoose");

const recipesSchema = new Schema(
    {
        label: {
            type: String,
            required: [true, "A Recipe name is required!"],
            unique: true,
            trim: true
        },
        uri: {
            type: String,
            required: [true, "A Recipe uri is required!"],
            unique: true,
            trim: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);



const Recipes = model("Recipes", recipesSchema)

module.exports = Recipes