/*
*
 Note: The logic in place looks for the "outer" text at the start of the "id", if this is removed the popup functionality will no longer work.
 *
 */

const learningFrameworkText = "Learning framework";

export const dataLearningFramework = [
    {
        id: "outer Learning Environment",
        value: 1,
        borderColor: "blue",

        framework: learningFrameworkText,
        frameworkCategory: "Belonging",

        heading: "Learning environment",
        subheading:
            "Creates and maintains positive conditions for learning to occur.",

        teacherListItems: [
            "Maintains workable and safe learning routines",
            "Consistently models positive behaviour, acceptance and inclusivity",
            "Finds the reason behind student behaviours and implements effective strategies to support their student",
        ],

        learnerListItems: [
            "Contributes to an inclusive learning environment by following instructions and routines",
            "Strives to do their best in every situation and asks for help when needed",
            "Works with others to develop positive responses in challenging situations",
        ],
    },

    {
        id: "outer Explicit Teaching",
        value: 1,
        borderColor: "green",

        framework: learningFrameworkText,
        frameworkCategory: "Learning",

        heading: "Explicit teaching",
        subheading: "Directing student attention towards specific learning.",

        teacherListItems: [
            "Engages with the why and how of learning",
            "Connects to prior learning, Catholic teachings and learning goals",
            "Provides guided and independent learning experiences",
        ],

        learnerListItems: [
            "Knows what they are learning and why",
            "Works with their teacher to develop knowledge and skills",
            "Learns collaboratively and independently",
        ],
    },

    {
        id: "outer Quality Assessment",
        value: 1,
        borderColor: "green",

        framework: learningFrameworkText,
        frameworkCategory: "Learning",

        heading: "Quality assessment",
        subheading:
            "Monitors students progress to facilitate growth in learning.",

        teacherListItems: [
            "Creates regular, authentic assessment opportunities",
            "Provides exemplar responses and models successful processes",
            "Creates judicious marking criteria and collaborates to ensure consistency, fairness and effective feedback",
        ],

        learnerListItems: [
            "Engages with assessment opportunities",
            "Processes examples of successful assessment to demonstrate understanding",
            "Reflects on their learning through feedback and responds proactively",
        ],
    },

    {
        id: "outer Wellbeing",
        value: 1,
        borderColor: "red",

        framework: learningFrameworkText,
        frameworkCategory: "Celebrating",

        heading: "Wellbeing",
        subheading:
            "Balances holistic health with higher academic achievement.",

        teacherListItems: [
            "Knows the broader context of each student in their learning",
            "Maintains consistent yet flexible learning routines",
            "Promotes Catholic values and a love of learning ",
        ],

        learnerListItems: [
            "Collaborates with staff, families and community to celebrate achievements",
            "Feels supported in all aspects of their development",
            "Values growth and strives to achieve their best",
        ],
    },

    {
        id: "outer High Expectations",
        value: 1,
        borderColor: "red",

        framework: learningFrameworkText,
        frameworkCategory: "Celebrating",

        heading: "High expectations",
        subheading:
            "Challenges and engages students to develop their full potential.",

        teacherListItems: [
            "Models successful processes to achieve learning goals",
            "Supports students through structures, scaffolds and mentoring",
            "Celebrates student growth and progress towards achievement of goals",
        ],

        learnerListItems: [
            "Strives to excel and achieve",
            "Applies learning processes to create successful products",
            "Showcases their abilities and achievements",
        ],
    },

    {
        id: "outer Using Data",
        value: 1,
        borderColor: "orange",

        framework: learningFrameworkText,
        frameworkCategory: "Reflecting",

        heading: "Using data",
        subheading: "Affirms success and identifies areas for development.",

        teacherListItems: [
            "Uses a range of data sources to inform teaching practice",
            "Adjusts activities to respond to learning needs",
            "Engages in professional learning to develop expertise in data analysis",
        ],

        learnerListItems: [
            "Responds positively to data-informed teaching practice",
            "Uses their own data to implement improvements in their learning",
            "Collaborates with teachers to make choices informed by data",
        ],
    },

    {
        id: "outer Effective Feedback",
        value: 1,
        borderColor: "orange",

        framework: learningFrameworkText,
        frameworkCategory: "Reflecting",

        heading: "Effective feedback",
        subheading: "Focuses on improving products, processes and behaviours.",

        teacherListItems: [
            "Communicates formative and summative task information clearly to students and carers",
            "Provides timely and specific advice to students about how they can improve",
            "Gives students the opportunity to respond to feedback",
        ],

        learnerListItems: [
            "Prepares for tasks by engaging with teachers and peers",
            "Responds to feedback in a timely manner",
            "Uses feedback as an opportunity for improvement",
        ],
    },

    {
        id: "outer Collaboration",
        value: 1,
        borderColor: "blue",

        framework: learningFrameworkText,
        frameworkCategory: "Belonging",

        heading: "Collaboration",
        subheading:
            "Shares successful and innovate evidence-informed practices.",

        teacherListItems: [
            "Meets regularly with colleagues from within and outside the College",
            "Engages in professional learning to develop best practice",
            "Articulates the Catholic vision and values of the College consistently",
        ],

        learnerListItems: [
            "Benefits from contemporary ideas and practices",
            "Engages successfully with their teachers and peers",
            "Respects the vision and values of the College and its Catholic tradition",
        ],
    },
];
