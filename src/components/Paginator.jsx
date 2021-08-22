import React, {useState} from 'react';
import {Box, Button, Center, Flex, Grid, Text} from "@chakra-ui/react";

const Paginator = ({totalPages, page, setPage}) => {
    let [currentCluster, setCurrentCluster] = useState(Math.ceil(page / 10) - 1)
    let clusters = []
    let cluster = []
    for (let i = 1; i <= totalPages; i++) {
        cluster.push(i)
        if (i % 10 === 0 || i === totalPages) {
            clusters.push(cluster)
            cluster = []
        }
    }
    let [hasPrev, setHasPrev] = useState(currentCluster !== 0)
    let [hasNext, setHasNext] = useState(currentCluster !== clusters.length - 1)
    const decreaseCurrentCluster = () => {
        setCurrentCluster(currentCluster - 1)
        if (currentCluster - 1 === 0) {
            setHasPrev(false)
        } else if (!hasNext) {
            setHasNext(true)
        }
    }
    const increaseCurrentCluster = () => {
        setCurrentCluster(currentCluster + 1)
        if (currentCluster + 1 === clusters.length - 1) {
            setHasNext(false)
        } else if (!hasPrev) {
            setHasPrev(true)
        }
    }
    if (totalPages === 0) return null
    return (
            <Center>

                <Button
                    width={30}
                    mr={1}
                    size="xs"
                    onClick={decreaseCurrentCluster}
                    disabled={!hasPrev}
                >
                    {"<"}
                </Button>
                {
                    clusters[currentCluster].map( p =>
                        <Button
                            key={p}
                            width={30}
                            mr={1}
                            size="xs"
                            onClick={() => setPage(p)}
                            fontWeight={p === page && 'bold'}
                        >
                            {p}
                        </Button>
                    )
                }
                <Button
                    width={30}
                    size="xs"
                    onClick={increaseCurrentCluster}
                    disabled={!hasNext}
                >
                    {">"}
                </Button>
            </Center>
    );
};

export default Paginator;