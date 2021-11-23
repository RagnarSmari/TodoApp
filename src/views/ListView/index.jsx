import React from 'react';
import {
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import getAllListsByBoardId from '../../services/listService/listService';
import ListAllLists from '../../components/ListAllLists';

// Here is a view of each board
// Have to somehow get each board and list all the data from it
/* eslint react/prop-types: 0 */
const ListView = function ({ route }) {
  const { params } = route;
  const { boardId } = params;
  const allLists = getAllListsByBoardId(boardId);
  return (
    <ListAllLists lists={allLists} />
  );
};

ListView.propTypes = {
  route: PropTypes.shape({
    key: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    params: PropTypes.shape({
      boardId: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
export default ListView;
