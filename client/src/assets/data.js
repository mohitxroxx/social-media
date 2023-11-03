//creating data of user

 export const user ={
    _id: "64df3c064180b81adfe41d4b",
    firstName: "Code",
    lastName: "Wave",
    email: "sachendra@gmail.com",

    friends: [
        {
            _id: "64df3aec4180b81adfe41d32",
      firstName: "John",
      lastName: "Bruce",
      email: "john@gmail.com",
      friends: ["64df3c064180b81adfe41d4b", "64df39704180b81adfe41d0b"],
      views: [],
      verified: true,
      createdAt: "2023-08-18T09:33:32.519Z",
      updatedAt: "2023-08-18T09:49:19.475Z",
      __v: 2,
      profileUrl:
        "https://res.cloudinary.com/djs3wu5bg/image/upload/v1683874470/cld-sample.jpg",
    },  
    {
        _id: "64df39704180b81adfe41d0b",
        firstName: "James",
        lastName: "Jackson",
        email: "james@gmail.com",
        friends: ["64df3c064180b81adfe41d4b", "64df3aec4180b81adfe41d32"],
        views: [
          "64df39704180b81adfe41d0b",
          "64df39704180b81adfe41d0b",
          "64df39704180b81adfe41d0b",
          "64df39704180b81adfe41d0b",
          "64df39704180b81adfe41d0b",
          "64df39704180b81adfe41d0b",
        ],    
        verified: true,
      createdAt: "2023-08-18T09:27:12.064Z",
      updatedAt: "2023-08-21T06:46:26.798Z",
      __v: 8,
      location: "Mumbai, India",
      profession: "Full-Stack Developer",
    },

    {
        _id: "64df424b4a4c0d47b5369f65",
        firstName: "User",
        lastName: "One",
        email: "user!@gmail.com",
        friends: ["64df3c064180b81adfe41d4b"],
        views: [],
        verified: true,
        createdAt: "2023-08-18T10:04:59.677Z",
        updatedAt: "2023-08-18T10:09:20.006Z",
        __v: 1,
      },
    ],
    views: [
        "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    ],
    verified: true,
    createdAt: "2023-08-18T09:38:14.179Z",
    updatedAt: "2023-08-21T06:46:18.258Z",
    profileUrl:
      "https://res.cloudinary.com/djs3wu5bg/image/upload/v1683874454/samples/people/boy-snow-hoodie.jpg",
    token: "hZWFmZmU3NmMiLCJpYXQiOjE2OTIwMzY5",
  };


  export const friends = [
    {
      _id: "64df3aec4180b81adfe41d32",
      firstName: "John",
      lastName: "Bruce",
      email: "john@gmail.com",
      profileUrl:
        "https://res.cloudinary.com/djs3wu5bg/image/upload/v1683874470/cld-sample.jpg",
    },
    {
      _id: "64df39704180b81adfe41d0b",
      firstName: "James",
      lastName: "Jackson",
      email: "james@gmail.com",
      location: "Mumbai, India",
      profession: "Full-Stack Developer",
    },
    {
      _id: "64df424b4a4c0d47b5369f65",
      firstName: "User",
      lastName: "One",
      email: "user!@gmail.com",
    },
  ];
  export const requests = [
    {
      _id: "64df3aec4180b81adfe41d32",
      requestFrom: friends[0],
    },
    {
      _id: "64df39704180b81adfe41d0b",
      requestFrom: friends[1],
    },
    {
      _id: "64df424b4a4c0d47b5369f65",
      requestFrom: friends[2],
    },
  ];
export const suggest =[
    {
        _id: "64df3aec4180b81adfe41d32",
        ...friends[0],
      },
      {
        _id: "64df39704180b81adfe41d0b",
        ...friends[1],
      },
      {
        _id: "64df424b4a4c0d47b5369f65",
        ...friends[2],
      },

];


    
