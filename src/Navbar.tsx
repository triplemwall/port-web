import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/core";
import GitHubIcon from "src/assets/githubIcon.png";
import linkedinIcon from "src/assets/linkedinIcon.png";
import menuIcon from "src/assets/menuIcon.png";
import {
  NavbarLink,
  SidebarLink,
  SidebarContainer,
} from "src/StyledComponents";
import { Icon } from "@chakra-ui/core";
import { motion } from "framer-motion";

type NavbarProps = {
  sidebar: boolean;
  setSidebar: (sidebar: boolean) => void;
};

const Navbar: React.FC<NavbarProps> = ({ sidebar, setSidebar }) => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  window.onresize = () => {
    setWindowSize(window.innerWidth);
  };

  return (
    <>
      <Flex justifyContent="center" alignItems="center" py="10px" mx="10%">
        <Box w="70%" d="flex">
          <Link to="/">
            <Box
              color="Highlight"
              fontSize="45px"
              fontWeight="bold"
              fontFamily="TimesNewRoman"
            >
              Landon Schlangen
            </Box>
          </Link>
        </Box>
        {windowSize > 860 && (
          <Box
            w="30%"
            d="flex"
            justifyContent="space-around"
            alignItems="center"
          >
            <Link to="/">
              <NavbarLink>About Me</NavbarLink>
            </Link>
            <Link to="/projects">
              <NavbarLink>Projects</NavbarLink>
            </Link>
          </Box>
        )}

        {windowSize > 860 && (
          <Box d="flex">
            <Box marginRight="10px">
              <a href="https://github.com/Landon345" target="_blank">
                <img src={GitHubIcon} alt="Github" height="30px" />
              </a>
            </Box>
            <Box>
              <a href="https://www.linkedin.com/in/landon-schlangen-a3989a16b/">
                <img src={linkedinIcon} alt="LinkedIn" height="30px" />
              </a>
            </Box>
          </Box>
        )}

        {windowSize <= 860 && (
          <Box
            onClick={() => setSidebar(!sidebar)}
            position="absolute"
            top="6"
            right="40px"
          >
            {sidebar ? (
              <Box cursor="pointer">
                <Icon name="close" size="30px" />
              </Box>
            ) : (
              <Box cursor="pointer">
                <img src={menuIcon} alt="menu" height="30px" />
              </Box>
            )}
          </Box>
        )}

        {windowSize <= 860 && (
          <>
            <SidebarContainer open={sidebar}>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Box>
                  <Link to="/">
                    <SidebarLink>About Me</SidebarLink>
                  </Link>
                </Box>
                <Box>
                  <Link to="/projects">
                    <SidebarLink>Projects</SidebarLink>
                  </Link>
                </Box>

                <Box>
                  <a href="https://github.com/Landon345" target="_blank">
                    <SidebarLink>
                      <Box>GitHub</Box>
                      <img src={GitHubIcon} alt="Github" height="30px" />
                    </SidebarLink>
                  </a>
                </Box>
                <Box>
                  <a
                    href="https://www.linkedin.com/in/landon-schlangen-a3989a16b/"
                    target="_blank"
                  >
                    <SidebarLink>
                      <Box>LinkedIn</Box>
                      <img src={linkedinIcon} alt="LinkedIn" height="30px" />
                    </SidebarLink>
                  </a>
                </Box>
              </motion.div>
            </SidebarContainer>
          </>
        )}
      </Flex>
    </>
  );
};

export default Navbar;
