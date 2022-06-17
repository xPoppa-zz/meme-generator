// Docs : https://chakra-ui.com/docs/theming/customize-theme#scaling-out-your-project
import { extendTheme } from "@chakra-ui/react";

import Heading from "./components/heading";
import Text from "./components/text";


// Extend the theme with custom colors, fonts, etc.
const overrides = {


    components: {
        Heading,
        Text
    },
};

export default extendTheme(overrides);