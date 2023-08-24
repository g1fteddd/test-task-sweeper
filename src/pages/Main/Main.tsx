import React from 'react';
import { useSelector } from 'react-redux';
import { settingsSelector } from '../../redux/settings/selectors';
import Game from '../../layouts/Game/Game';
import Settings from '../../layouts/Settings/Settings';

const Main: React.FC = () => {
	const { hasGameStarted } = useSelector(settingsSelector);

	return <>{hasGameStarted ? <Game /> : <Settings />}</>;
};

export default Main;
