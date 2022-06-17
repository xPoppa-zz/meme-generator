const Text = {
    // style object for base or default style
    baseStyle: {},
    // styles for different sizes ("sm", "md", "lg")
    sizes: {},
    // styles for different visual variants ("outline", "solid")
    variants: {
        "memeHeader": {
            fontSize: "12px",
            color: "white",
            letterSpacing: "0.5px",
            fontWeight: "200",
            fontFamily: "Inter"
        },
        h1: {
            // you can also use responsive styles
        },
    },
    // default values for `size` and `variant`
    defaultProps: {},
};

export default Text;