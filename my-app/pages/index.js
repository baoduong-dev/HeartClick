import { Box, Flex, Icon, keyframes, Text, usePrefersReducedMotion } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { BsHeartFill } from 'react-icons/bs'
const ping = keyframes`
  75%, 100% {
    transform: scale(2);
    opacity: 0;
}
`

export default function Home() {
  const [size, setSize] = useState(20)
  const [text, setText] = useState('Bấm vào trái tim ☝')
  const [textSize, setTextSize] = useState('xl')

  const handleClick = () => {
    setSize(size + 5)
    if (size <= 50) {
      setText('Tiếp tục bấm đi')
    }
    if (size <= 100 && size > 50) {
      setText('Chưa có gì đâu, bấm tiếp đi')
    }
    if (size <= 150 && size > 100) {
      setText('Sắp có bất ngờ, bấm tiếp nào 😘')
    }
    if (size > 150) {
      setText('Love You 😘😘😘😘😘')
      setTextSize('4xl')
    }
  }


  const prefersReducedMotion = usePrefersReducedMotion()
  const animation = prefersReducedMotion
    ? undefined
    : `${ping} 1s cubic-bezier(0,0,.2,1) infinite`
  return (
    <div>
      <Head>
        <title>Heart Click - Develop by BaoDuong</title>
        <meta name="description" content="Heart Click - Develop by BaoDuong" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex
        height='100vh'
        align='center'
        justifyContent='center'
        direction='column'
      >
        <Box
          cursor='pointer'
        >
          <Icon as={BsHeartFill}
            color='red.400'
            opacity='.75'
            position='absolute'
            w={`${size}px`}
            h={`${size}px`}
            animation={animation}
          />
          <Icon as={BsHeartFill} color='red.400'
            position='relative'
            w={`${size}px`}
            h={`${size}px`}
            onClick={handleClick}
          />
        </Box>

        <Box
          mt='5'
        >
          <Text
            fontSize={textSize}
            fontWeight={size > 150 ? 'semibold' : 'normal'}
            color={size > 150 ? 'red.500' : 'black'}
          >
            {text}
          </Text>
        </Box>

      </Flex>

    </div >
  )
}
