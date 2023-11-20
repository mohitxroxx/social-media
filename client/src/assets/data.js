//creating data of user

export const user ={
  _id: "64df3c064180b81adfe41d4b",
  firstName: "GDSC",
  lastName: "AKGEC",
  profession: "GOOGLE DEVELOPMENT STUDENT CLUB",
  email: "connect2dsc.akgec@gmail.com",

  friends: [
      {
          _id: "64df3aec4180b81adfe41d32",
    firstName: "Tarun",
    lastName: "Mishra",
    email: "tarun@gmail.com",
    profession: "Full-Stack Developer",
    friends: ["64df3c064180b81adfe41d4b", "64df39704180b81adfe41d0b"],
    views: [],
    verified: true,
    createdAt: "2023-08-18T09:33:32.519Z",
    updatedAt: "2023-08-18T09:49:19.475Z",
    __v: 2,
    
  },  
  {
      _id: "64df39704180b81adfe41d0b",
      firstName: "Varun",
      lastName: "Pratap",
      email: "varun@gmail.com",
      profession: "Full-Stack Developer",
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
      firstName: "Karan",
      lastName: "Singh",
      email: "karan@gmail.com",
      profession: "Full-Stack Developer",
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
    "https://d1fdloi71mui9q.cloudfront.net/ROLfF9hgSc6nNawYpI04_bt8QxF0oNv43F2bR",
  token: "hZWFmZmU3NmMiLCJpYXQiOjE2OTIwMzY5",
};


export const friends = [
  {
    _id: "64df3aec4180b81adfe41d32",
    firstName: "Tushar",
    lastName: "Mishra",
    profession: "Full-Stack Developer",
    profileUrl:
    "https://th.bing.com/th/id/OIP.dgjf_krLCMNB9lM5roq_LgHaHa?w=184&h=184&c=7&r=0&o=5&pid=1.7",
    email: "tushar@gmail.com",
    
  },
  {
    _id: "64df39704180b81adfe41d0b",
    firstName: "Varun",
    lastName: "Pratap",
    profileUrl:
    "https://yt3.googleusercontent.com/rydC3ZtVK4cFzQ2bkooLOWTzc70NBXdPpcFEARx6E_mzqy8nj0eZDDovwciUg-4r4pMv99YsBg=s900-c-k-c0x00ffffff-no-rj",
    email: "varun@gmail.com",
    location: "Mumbai, India",
    profession: "Full-Stack Developer",
  },
  {
    _id: "64df424b4a4c0d47b5369f65",
    firstName: "Karan",
    lastName: "Singh",
    profession: "Full-Stack Developer",
    profileUrl:
    "https://sm.askmen.com/t/askmen_in/article/f/facebook-p/facebook-profile-picture-affects-chances-of-gettin_fr3n.1200.jpg",
    email: "karan@gmail.com",
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

export const posts = [
  {
    _id: "64e2fe620d7868ecff1a6a86",
    userId: {
      _id: "64df39704180b81adfe41d0b",
      firstName: "Sachendra",
      lastName: "Gangwar",
      profileUrl:
      "https://bestprofilepictures.com/wp-content/uploads/2021/08/Amazing-Profile-Picture-for-Facebook.jpg",
      location: "Ghaziabad, India",
    },
    description: "Hello everyone, this is a new post. check it out. thank you",
    image:
      "https://dscakgec.org/static/media/solutionchallenge.2d26f063afb7d335990b.webp",
    likes: ["64df3c064180b81adfe41d4b"],
    comments: [],
    createdAt: "2023-08-21T06:04:18.297Z",
    updatedAt: "2023-08-21T06:04:18.297Z",
    __v: 0,
  },
  {
    _id: "64e1cdd64baffca670364c8c",
    userId: {
      _id: "64df39704180b81adfe41d0b",
      firstName: "Krishna",
      lastName: "Bansal",
      profileUrl:
      "https://th.bing.com/th/id/OIP.1OxHm0-YJ86HSsNFBf3kOAHaHa?pid=ImgDet&rs=1",
      location: "Ghaziabad, India",
    },
    description:
      "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, ",
    likes: ["64df39704180b81adfe41d0b"],
    comments: [],
    createdAt: "2023-08-20T08:24:54.330Z",
    updatedAt: "2023-08-21T03:23:24.809Z",
    __v: 0,
  },
  {
    _id: "64df437e4a4c0d47b536a002",
    userId: {
      _id: "64df424b4a4c0d47b5369f65",
      firstName: "Mohit",
      lastName: "Singh",
      profileUrl:
     " https://wallpapercave.com/wp/wp7810895.jpg",
    },
    description:
      "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, ",
    likes: ["64df424b4a4c0d47b5369f65"],
    comments: ["64e2d1c977e497bd3a0bf67b"],
    createdAt: "2023-08-18T10:10:06.969Z",
    updatedAt: "2023-08-21T02:54:01.806Z",
    __v: 0,
    image:
      "https://th.bing.com/th/id/OIP.vds9YZdeolzbM3dLN_ehbAHaHa?pid=ImgDet&w=474&h=474&rs=1",
  },
  {
    _id: "64df43714a4c0d47b5369fef",
    userId: {
      _id: "64df3c064180b81adfe41d4b",
      firstName: "Tarun",
      lastName: "Lalwani",
     profileUrl:
     "https://dscakgec.org/static/media/tarun.7b8e5ec20858d4ee0bf3.jpg",
     
    },
    description:
      "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, ",
    likes: ["64df39704180b81adfe41d0b"],
    comments: [],
    createdAt: "2023-08-18T10:09:53.009Z",
    updatedAt: "2023-08-21T03:35:18.541Z",
    __v: 0,
  },
  {
    _id: "64df42dc4a4c0d47b5369f8a",
    userId: {
      _id: "64df424b4a4c0d47b5369f65",
      firstName: "Vikshita",
      lastName: "Jain",
      profileUrl:
      "https://dscakgec.org/static/media/vikshita.f59843ee23e2b84d2a5a.jpg",
    },
    description:
      " What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,",
    likes: ["64df424b4a4c0d47b5369f65"],
    comments: [],
    createdAt: "2023-08-18T10:07:24.023Z",
    updatedAt: "2023-08-18T10:11:00.348Z",
    __v: 0,
    image:
      "https://dscakgec.org/static/media/weekoflearning.b68b9a904d48c02045ce.jpg",
  },
  {
    _id: "64df42b04a4c0d47b5369f77",
    userId: {
      _id: "64df424b4a4c0d47b5369f65",
      firstName: "Kapish",
      lastName: "Upadhayay",
      profileUrl:
      "https://dscakgec.org/static/media/kapish.6122e502213ca615c958.png",
    },
    description:
      "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, ",
    likes: [],
    comments: [],
    createdAt: "2023-08-18T10:06:40.339Z",
    updatedAt: "2023-08-18T10:06:40.339Z",
    __v: 0,
  },
  {
    _id: "64df41114a4c0d47b5369f02",
    userId: {
      _id: "64df3aec4180b81adfe41d32",
      firstName: "GDSC",
      lastName: "AKGEC",
      profileUrl:
    "https://d1fdloi71mui9q.cloudfront.net/ROLfF9hgSc6nNawYpI04_bt8QxF0oNv43F2bR",
     
    },
    description:
      " What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    likes: ["64df39704180b81adfe41d0b"],
    comments: [],
    createdAt: "2023-08-18T09:59:45.876Z",
    updatedAt: "2023-08-18T10:01:35.333Z",
    __v: 0,
  },
  {
    _id: "64df3ef86c2bd953c7b43193",
    userId: {
      _id: "64df3c064180b81adfe41d4b",
      firstName: "Shorya",
      profileUrl:
      "https://dscakgec.org/static/media/Arpan.562ccc6368e12bd386c5.png",
    },
    description:
      "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, ",
    likes: [
      "64df3aec4180b81adfe41d32",
      "64df424b4a4c0d47b5369f65",
      "64df39704180b81adfe41d0b",
    ],
    comments: [
      "64df41304a4c0d47b5369f0d",
      "64df41b14a4c0d47b5369f4d",
      "64df43e04a4c0d47b536a02a",
    ],
    createdAt: "2023-08-18T09:50:48.398Z",
    updatedAt: "2023-08-21T03:36:36.745Z",
    __v: 0,
    image:
      "https://th.bing.com/th/id/OIP.UPIX2lt9qvtD8MU7I74d-gHaHa?pid=ImgDet&w=474&h=474&rs=1",
  },
  {
    _id: "64df3ed06c2bd953c7b43172",
    userId: {
      _id: "64df39704180b81adfe41d0b",
      firstName: "GDSC",
      lastName: "AKGEC",
      profileUrl:
    "https://d1fdloi71mui9q.cloudfront.net/ROLfF9hgSc6nNawYpI04_bt8QxF0oNv43F2bR",
      location: "Ghaziabad, India",
    },
    description:
      " What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    likes: ["64df39704180b81adfe41d0b"],
    comments: ["64e2dc8577e497bd3a0bf843"],
    createdAt: "2023-08-18T09:50:08.431Z",
    updatedAt: "2023-08-21T03:44:36.962Z",
    __v: 0,
    image:
      "https://res.cloudinary.com/djs3wu5bg/image/upload/v1683874453/samples/bike.jpg",
  },
];

export const postComments = [
  {
    _id: "64df43e04a4c0d47b536a02a",
    userId: {
      _id: "64df424b4a4c0d47b5369f65",
      firstName: "User",
      lastName: "One",
    },
    postId: "64df3ef86c2bd953c7b43193",
    comment: "hahahah",
    from: "User One",
    likes: ["64df39704180b81adfe41d0b"],
    replies: [],
    createdAt: "2023-08-18T10:11:44.091Z",
    updatedAt: "2023-08-21T03:37:03.927Z",
    __v: 0,
  },
  {
    _id: "64df41b14a4c0d47b5369f4d",
    userId: {
      _id: "64df39704180b81adfe41d0b",
      firstName: "MTech",
      lastName: "Solutions",
      profileUrl:
        "https://res.cloudinary.com/djs3wu5bg/image/upload/v1692299991/SOCIALMEDIA/fvws1unsqytcqketv78w.png",
      location: "Mumbai, India",
    },
    postId: "64df3ef86c2bd953c7b43193",
    comment: "i would like to have them in my house",
    from: "MTech Solutions",
    likes: ["64df39704180b81adfe41d0b"],
    replies: [],
    createdAt: "2023-08-18T10:02:25.492Z",
    updatedAt: "2023-08-21T03:27:57.602Z",
    __v: 0,
  },
  {
    _id: "64df41304a4c0d47b5369f0d",
    userId: {
      _id: "64df3aec4180b81adfe41d32",
      firstName: "sachendra",
      lastName: "gangwar",
      profileUrl:
        "https://res.cloudinary.com/djs3wu5bg/image/upload/v1683874470/cld-sample.jpg",
    },
    postId: "64df3ef86c2bd953c7b43193",
    comment: "This dogs are too serious!",
    from: "Akwasi Asante",
    likes: ["64df39704180b81adfe41d0b"],
    replies: [
      {
        userId: {
          _id: "64df39704180b81adfe41d0b",
          firstName: "Mohit",
          lastName: "Developer",
          profileUrl:
            "https://res.cloudinary.com/djs3wu5bg/image/upload/v1692299991/SOCIALMEDIA/fvws1unsqytcqketv78w.png",
          location: "Mumbai, India",
        },
        from: "MTech Solutions",
        replyAt: "Akwasi Asante",
        comment: "Not easy, hahahah",
        created_At: "2023-08-18T10:01:08.771Z",
        updated_At: "2023-08-18T09:56:38.344Z",
        likes: [],
        _id: "64df41644a4c0d47b5369f24",
      },
    ],
    createdAt: "2023-08-18T10:00:16.352Z",
    updatedAt: "2023-08-18T10:01:14.090Z",
    __v: 1,
  },
];
  