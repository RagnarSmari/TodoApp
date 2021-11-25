import React, { useEffect, useState } from 'react';
import {
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import Spinner from '../../components/Spinner';
import * as data from '../../resources/data.json';
import ListAllLists from '../../components/ListAllLists';

// Here is a view of each board
// Have to somehow get each board and list all the data from it
/* eslint react/prop-types: 0 */
const ListView = function ({ route }) {
  const { params } = route;
  const { boardId } = params;

  const [lists, setLists] = useState([]);
  const [loadingLists, setLoadingLists] = useState(true);

  const deleteList = () => {
    console.log('deleting list');
  };
  const updatingList = () => {
    console.log('updating List');
  };

  useEffect(() => {
    (async () => {
      const allLists = data.lists.filter((s) => s.boardId === boardId);
      setLists(allLists);
      setLoadingLists(false);
    })();
  }, []);
  return (
    <View>
      {
          loadingLists
            ? <Spinner />
            : (
              <ListAllLists lists={lists} setLists={setLists} listLength={data.lists.length} />
            )
        }
    </View>

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
