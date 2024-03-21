import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  maidenName: {
    type: String,
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
  },
  username: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  birthDate: {
    type: Date,
    required: true,
  },
  image: {
    type: String,
  },
  bloodGroup: {
    type: String,
  },
  height: {
    type: String,
  },
  weight: {
    type: String,
  },
  eyeColor: {
    type: String,
  },
  hair: {
    color: {
      type: String,
    },
    type: {
      type: String,
    },
  },
  domain: {
    type: String,
  },
  ip: {
    type: String,
  },
  address: {
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    coordinates: {
      lat: {
        type: String,
      },
      lng: {
        type: String,
      },
    },
    postalCode: {
      type: String,
    },
    state: {
      type: String,
    },
  },
  macAddress: {
    type: String,
  },
  university: {
    type: String,
  },
  bank: {
    cardExpire: {
      type: String,
    },
    cardNumber: {
      type: String,
    },
    cardType: {
      type: String,
    },
    currency: {
      type: String,
    },
    iban: {
      type: String,
    },
  },
});

export default mongoose.model("User", userSchema);
