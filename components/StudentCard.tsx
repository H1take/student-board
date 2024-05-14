'use client';
import React, {FC, useCallback} from 'react';
import {Box, Flex, Text, Image} from "@chakra-ui/react";
import {IStudent} from "@/components/Home";
import {useRouter} from "next/navigation";

const StudentCard: FC<{ student: IStudent }> = ({ student }) => {
    const router = useRouter();

    const handleRedirect = useCallback(() => {
        router.push(`/${student.id}`)
    }, []);

    return(
        <Flex flexDirection={'column'} alignItems={'center'} width={['150px', '200px']} height={['200px', '270px']} cursor={'pointer'} onClick={handleRedirect}>
            <Image style={{ borderRadius: '0.5rem' }} width={['130px', '200px']} height={['160px', '240px']} src={student.photo} alt={student.name} />
            <Text fontSize={'18px'} as={'b'}>{student.name}</Text>
        </Flex>
    );
};

export default StudentCard;