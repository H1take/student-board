'use client';
import React from 'react';
import { Box, Flex, Text } from "@chakra-ui/react";
import { IStudent } from "@/components/Home";
import Image from "next/image";

const StudentProfile = ({ student }: { student: IStudent | undefined }) => {
    return (
        <Flex
            mt={['50px', '100px']}
            padding={'20px'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            overflow={'hidden'}
        >
            {student?.photo &&
                <Image style={{ borderRadius: '0.5rem' }} width={300} height={300} src={student?.photo} alt={student?.name} />
            }
            <Text fontSize={'24px'} as={'b'} textAlign={'center'}>
                {student?.name}
            </Text>
            <Box width={['90%', '80%', '70%', '60%']} maxWidth={'1500px'} overflow={'hidden'}>
                <Text fontSize={'18px'} whiteSpace={'pre-wrap'} fontWeight={500} mb={'50px'}>
                    {student?.description}
                </Text>
            </Box>
        </Flex>
    )
};

export default StudentProfile;
