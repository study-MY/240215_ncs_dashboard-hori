import { mode } from "@chakra-ui/theme-tools";

export const tableStyles = {
  components: {
    Table: {
      baseStyle: {
        thead: {
          th: {
            fontSize: "12px",
            color: "#d9d9d9",
          },
        },
        tbody: {
          td: {
            fontSize: "14px",
            fontWeight: "700",
            checkbox: {
              borderRadius: "4px",
            },
          },
        },
      },
    },
  },
};
