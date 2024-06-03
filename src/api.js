// api.js

const newsData=[
    {
        id: 1,
        introtext: "Test link",
        postedBy: "uniquesupport@demoschool.com",
        lastUpdated: "18 Jan 2024, 6:34 AM",
        category: "None",
        published: true,
    },
    {
        id: 2,
        introtext: "Test link",
        postedBy: "Lumbini@demoschool.com",
        lastUpdated: "20 Jan 2024, 6:34 AM",
        category: "None",
        published: true,
    },
    {
        id: 3,
        introtext: "Test link",
        postedBy: "LittleScholars@demoschool.com",
        lastUpdated: "20 Jan 2024, 6:34 AM",
        category: "None",
        published: true,
    },
    {
        id: 4,
        introtext: "Test link",
        postedBy: "Banglore@demoschool.com",
        lastUpdated: "20 Jan 2024, 6:34 AM",
        category: "None",
        published: true,
    },
];

export const getNewsData = () => {
    return new Promise((resolve) => {
        console.log('DATA', resolve(newsData));
        setTimeout(() => resolve(newsData), 1000);
    });
};

export const addNews=(newsItem) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            newsData.push({ ...newsItem, id: newsData.length+1 });
            resolve();
        }, 1000);
    });
};
