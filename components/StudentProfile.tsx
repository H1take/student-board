'use client';
import React from 'react';
import {Flex, Text} from "@chakra-ui/react";
import {IStudent} from "@/components/Home";
import Image from "next/image";

const StudentProfile = ({ student }: { student: IStudent | undefined }) => {
    return(
        <Flex mt={['50px', '100px']} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
            {student?.photo &&
                <Image style={{borderRadius: '0.5rem'}} width={300} height={300} src={student?.photo} alt={student?.name}/>
            }
            <Text fontSize={'24px'} as={'b'}>
                {student?.name}
            </Text>
            <Text fontSize={'18px'} width={['370px', '1500px']} fontWeight={500} mb={'50px'}>
                {student?.description}
            </Text>
        </Flex>
    )
};

export default StudentProfile;