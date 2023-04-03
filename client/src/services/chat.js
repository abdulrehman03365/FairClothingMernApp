import { useEffect } from 'react';
import io from 'socket.io-client';
// require('dotenv').config()
const socket = io('http://localhost:9000')

export default socket;