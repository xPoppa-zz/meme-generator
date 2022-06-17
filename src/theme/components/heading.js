const Heading = {
    // style object for base or default style
    baseStyle: {},
    // styles for different sizes ("sm", "md", "lg")
    sizes: {},
    // styles for different visual variants ("outline", "solid")
    variants: {
        "memeHeader": {
            fontSize: "20px",
            color: "white",
            letterSpacing: "0.5px",
            fontWeight: "600",
            fontFamily: "Karla"
        },
        h1: {
            // you can also use responsive styles
        },
    },
    // default values for `size` and `variant`
    defaultProps: {},
};

export default Heading;