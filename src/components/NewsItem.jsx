import React from 'react';
import { TableRow, TableCell, Button } from '@material-ui/core';

const NewsItem=({ item }) => {
    return (
        <TableRow>
            <TableCell>{item.introtext}</TableCell>
            <TableCell>{item.postedBy}</TableCell>
            <TableCell>{item.lastUpdated}</TableCell>
            <TableCell>{item.category}</TableCell>
            <TableCell>{item.published? 'Yes':'No'}</TableCell>
            <TableCell>
                <Button variant="contained" color="primary">Edit</Button>
            </TableCell>
        </TableRow>
    );
};

export default NewsItem;
