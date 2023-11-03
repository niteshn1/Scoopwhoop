const newsData = {
  Details: [
    {
      id: 1,
      category: "FINANCE",
      author: "Neeraj Dhankher",
      description:
        "Jio World Plaza Is Here & It’s Bringing 11 Luxurious Brands To The City For The Very First Time",

      // publishedAt: "2023-11-01T21:30:15Z",
      src: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202310/jio-world-plaza-is-an-immersive-retail-destination-for-top-end-brands-010749833-16x9_0.jpeg?VersionId=mso9EXsHRIxfa8V600zBXyvXIPTlJbVa&size=690:388",
    },
    {
      id: 2,
      category: "ENTERTAINMENT",
      author: "Neeraj Dhankher",
      description:
        "Spreading Love From The Balcony: These Pictures Of SRK On His Birthday Are As Special As Him",

      // publishedAt: "2023-11-01T21:30:15Z",
      src: "https://www.scoopwhoop.com/_next/image/?url=https%3A%2F%2Fwp.scoopwhoop.com%2Fwp-content%2Fuploads%2F2023%2F11%2F10.png%3Fw%3D300&w=3840&q=75",
    },
    {
      id: 3,
      category: "Sports",
      author: "Neeraj Dhankher",
      description:
        "Take This Quiz To Find Out How Much You Know About The Current Indian Cricket Team",

      // publishedAt: "2023-11-01T21:30:15Z",
      src: "https://www.scoopwhoop.com/_next/image/?url=https%3A%2F%2Fwp.scoopwhoop.com%2Fwp-content%2Fuploads%2F2018%2F05%2F3f387a47-9717-4418-97ec-ab0b84a3232a.jpg%3Fw%3D300&w=3840&q=75",
    },
    {
      id: 4,
      category: "Entertainment",
      author: "Snigdha Nalini Oreya",
      description:
        "Beneath The Gossip & Drama, 9 Times Celebs Showed Their Vulnerable Sides On Koffee With Karan",

      // publishedAt: "2023-11-01T21:30:15Z",
      src: "https://www.scoopwhoop.com/_next/image/?url=https%3A%2F%2Fwp.scoopwhoop.com%2Fwp-content%2Fuploads%2F2023%2F10%2F6-12.png%3Fw%3D300&w=3840&q=75",
    },
    {
      id: 1,
      category: "FINANCE",
      author: "Neeraj Dhankher",
      description:
        "Jio World Plaza Is Here & It’s Bringing 11 Luxurious Brands To The City For The Very First Time",

      // publishedAt: "2023-11-01T21:30:15Z",
      src: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202310/jio-world-plaza-is-an-immersive-retail-destination-for-top-end-brands-010749833-16x9_0.jpeg?VersionId=mso9EXsHRIxfa8V600zBXyvXIPTlJbVa&size=690:388",
    },
    {
      id: 2,
      category: "ENTERTAINMENT",
      author: "Neeraj Dhankher",
      description:
        "Spreading Love From The Balcony: These Pictures Of SRK On His Birthday Are As Special As Him",

      // publishedAt: "2023-11-01T21:30:15Z",
      src: "https://www.scoopwhoop.com/_next/image/?url=https%3A%2F%2Fwp.scoopwhoop.com%2Fwp-content%2Fuploads%2F2023%2F11%2F10.png%3Fw%3D300&w=3840&q=75",
    },
    {
      id: 3,
      category: "Sports",
      author: "Neeraj Dhankher",
      description:
        "Take This Quiz To Find Out How Much You Know About The Current Indian Cricket Team",

      // publishedAt: "2023-11-01T21:30:15Z",
      src: "https://www.scoopwhoop.com/_next/image/?url=https%3A%2F%2Fwp.scoopwhoop.com%2Fwp-content%2Fuploads%2F2018%2F05%2F3f387a47-9717-4418-97ec-ab0b84a3232a.jpg%3Fw%3D300&w=3840&q=75",
    },
    {
      id: 4,
      category: "Entertainment",
      author: "Snigdha Nalini Oreya",
      description:
        "Beneath The Gossip & Drama, 9 Times Celebs Showed Their Vulnerable Sides On Koffee With Karan",

      // publishedAt: "2023-11-01T21:30:15Z",
      src: "https://www.scoopwhoop.com/_next/image/?url=https%3A%2F%2Fwp.scoopwhoop.com%2Fwp-content%2Fuploads%2F2023%2F10%2F6-12.png%3Fw%3D300&w=3840&q=75",
    },
    {
      id: 1,
      category: "FINANCE",
      author: "Neeraj Dhankher",
      description:
        "Jio World Plaza Is Here & It’s Bringing 11 Luxurious Brands To The City For The Very First Time",

      // publishedAt: "2023-11-01T21:30:15Z",
      src: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202310/jio-world-plaza-is-an-immersive-retail-destination-for-top-end-brands-010749833-16x9_0.jpeg?VersionId=mso9EXsHRIxfa8V600zBXyvXIPTlJbVa&size=690:388",
    },
    {
      id: 2,
      category: "ENTERTAINMENT",
      author: "Neeraj Dhankher",
      description:
        "Spreading Love From The Balcony: These Pictures Of SRK On His Birthday Are As Special As Him",

      // publishedAt: "2023-11-01T21:30:15Z",
      src: "https://www.scoopwhoop.com/_next/image/?url=https%3A%2F%2Fwp.scoopwhoop.com%2Fwp-content%2Fuploads%2F2023%2F11%2F10.png%3Fw%3D300&w=3840&q=75",
    },
    {
      id: 3,
      category: "Sports",
      author: "Neeraj Dhankher",
      description:
        "Take This Quiz To Find Out How Much You Know About The Current Indian Cricket Team",

      // publishedAt: "2023-11-01T21:30:15Z",
      src: "https://www.scoopwhoop.com/_next/image/?url=https%3A%2F%2Fwp.scoopwhoop.com%2Fwp-content%2Fuploads%2F2018%2F05%2F3f387a47-9717-4418-97ec-ab0b84a3232a.jpg%3Fw%3D300&w=3840&q=75",
    },
    {
      id: 4,
      category: "Entertainment",
      author: "Snigdha Nalini Oreya",
      description:
        "Beneath The Gossip & Drama, 9 Times Celebs Showed Their Vulnerable Sides On Koffee With Karan",

      // publishedAt: "2023-11-01T21:30:15Z",
      src: "https://www.scoopwhoop.com/_next/image/?url=https%3A%2F%2Fwp.scoopwhoop.com%2Fwp-content%2Fuploads%2F2023%2F10%2F6-12.png%3Fw%3D300&w=3840&q=75",
    },
    {
      id: 1,
      category: "FINANCE",
      author: "Neeraj Dhankher",
      description:
        "Jio World Plaza Is Here & It’s Bringing 11 Luxurious Brands To The City For The Very First Time",

      // publishedAt: "2023-11-01T21:30:15Z",
      src: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202310/jio-world-plaza-is-an-immersive-retail-destination-for-top-end-brands-010749833-16x9_0.jpeg?VersionId=mso9EXsHRIxfa8V600zBXyvXIPTlJbVa&size=690:388",
    },
    {
      id: 2,
      category: "ENTERTAINMENT",
      author: "Neeraj Dhankher",
      description:
        "Spreading Love From The Balcony: These Pictures Of SRK On His Birthday Are As Special As Him",

      // publishedAt: "2023-11-01T21:30:15Z",
      src: "https://www.scoopwhoop.com/_next/image/?url=https%3A%2F%2Fwp.scoopwhoop.com%2Fwp-content%2Fuploads%2F2023%2F11%2F10.png%3Fw%3D300&w=3840&q=75",
    },
    {
      id: 3,
      category: "Sports",
      author: "Neeraj Dhankher",
      description:
        "Take This Quiz To Find Out How Much You Know About The Current Indian Cricket Team",

      // publishedAt: "2023-11-01T21:30:15Z",
      src: "https://www.scoopwhoop.com/_next/image/?url=https%3A%2F%2Fwp.scoopwhoop.com%2Fwp-content%2Fuploads%2F2018%2F05%2F3f387a47-9717-4418-97ec-ab0b84a3232a.jpg%3Fw%3D300&w=3840&q=75",
    },
    {
      id: 4,
      category: "Entertainment",
      author: "Snigdha Nalini Oreya",
      description:
        "Beneath The Gossip & Drama, 9 Times Celebs Showed Their Vulnerable Sides On Koffee With Karan",

      // publishedAt: "2023-11-01T21:30:15Z",
      src: "https://www.scoopwhoop.com/_next/image/?url=https%3A%2F%2Fwp.scoopwhoop.com%2Fwp-content%2Fuploads%2F2023%2F10%2F6-12.png%3Fw%3D300&w=3840&q=75",
    },
  ],
};

export default newsData;
