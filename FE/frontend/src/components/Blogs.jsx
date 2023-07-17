import React, { useEffect, useState } from "react";
import {
    Box,
    Button,
    Flex,
    Input,
    InputGroup,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Stack,
    Text,
    useDisclosure
} from "@chakra-ui/react";

const BlogsContext = React.createContext({
    blogs: [], fetchBlogs: () => {}
  })


  export default function Blogs() {
    const [blogs, setBlogs] = useState([])
    const fetchBlogs = async () => {
      const response = await fetch("localhost:8000/blogs")
      const blogs = await response.json()
      setBlogs(blogs.data)
    }
  

  useEffect(() => {
    fetchBlogs()
  }, [])
  return (
    <BlogsContext.Provider value={{blogs, fetchBlogs}}>
      <Stack spacing={5}>
        {blogs.map((blog) => (
          <b>{blog.item}</b>
        ))}
      </Stack>
    </BlogsContext.Provider>
  )}