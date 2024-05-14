'use client';
import React, {FC} from 'react';
import {Box, Flex, Grid, Text} from "@chakra-ui/react";
import StudentCard from "@/components/StudentCard";
import Image from "next/image";

export interface IStudent {
    id: number;
    name: string;
    photo: string;
    description: string;
}

interface IHome {
    students: IStudent[];
}

const Home: FC<IHome> = ({ students }) => {
    return(
        <Box height={'65vh'} marginLeft={['10px', '0px']}>
            <Flex flexDirection={'column'} alignItems={'center'}>
                <Flex width={'auto'} mt={'25px'} alignItems={'center'} gap={'10px'}>
                    <Box cursor={'pointer'}>
                        <Image src={'logo1.svg'} alt={'logo'} width={50} height={50} />
                    </Box>
                    <Box>
                        <Text fontSize={'28px'} as={'b'}>ТПЭК СПОРТ</Text>
                    </Box>
                    <Box cursor={'pointer'}>
                        <Image src={'logo2.svg'} alt={'logo'} width={50} height={50} />
                    </Box>
                </Flex>
                <Grid templateColumns={['repeat(2, 1fr)', 'repeat(5, 1fr)']} mt={'100px'} gap={'15px'}>
                    {students.map((student) => <StudentCard key={student.id} student={student} />)}
                </Grid>
            </Flex>
        </Box>
    );
};

export default Home;