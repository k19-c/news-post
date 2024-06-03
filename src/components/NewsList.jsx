import React, { useEffect, useState } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, CircularProgress, Typography } from '@material-ui/core';
import NewsItem from './NewsItem';
import { getNewsData } from '../api';

const NewsList=({ news, setNews }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError ] = useState(null);

    useEffect(() => {
        getNewsData()
            .then(data => {
                setNews(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, [setNews]);

    if (loading) {
        return <CircularProgress />;
    }

    if (error) {
        return <Typography color="error">Error fetching news data: {error.message}</Typography>;
    }

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Introtext</TableCell>
                    <TableCell>Posted By</TableCell>
                    <TableCell>Last Updated</TableCell>
                    <TableCell>Category</TableCell>
                    <TableCell>Published</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {news.map(item => (
                    <NewsItem key={item.id} item={item} />
                ))}
            </TableBody>
        </Table>
    );
};

export default NewsList;
