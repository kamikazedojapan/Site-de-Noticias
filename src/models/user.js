import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, // Torna o campo obrigatório.
        trim: true // Remove espaços extras no início e no fim do texto.
    },
    username: {
        type: String,
        required: true,
        unique:true, // Evita duplicatas (username e email devem ser únicos).
        trim:true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true, // Converte e-mails para minúsculas automaticamente.
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // Regex para validar e-mails.
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    background: {
        type: String
    }
},

{ timestamps: true }); // Cria automaticamente `createdAt` e `updatedAt`

const User = mongoose.model("User", UserSchema);

export default User;