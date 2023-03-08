const validateParameters = (req, res, next) => {
    const { name, location, image, capacity, status } = req.body;
    
    // Validate required parameters
    if (!name || !location || !capacity || !status) {
      return res.status(400).json({ error: 'Missing required parameters' });
    }
  
    // Validate data types
    if (typeof name !== 'string' || typeof location !== 'string' || typeof image !== 'string' ||
        typeof capacity !== 'number' || typeof status !== 'string') {
      return res.status(400).json({ error: 'Invalid parameter data types' });
    }
  
    // Validate capacity range
    if (capacity <= 0 || capacity > 1000) {
      return res.status(400).json({ error: 'Capacity must be between 1 and 1000' });
    }
  
    // Validate status values
    if (status !== 'available' || status !== 'booked') {
      return res.status(400).json({ error: 'Invalid status value' });
    }
  

   
    next();
  };


  module.exports={
   validateParameters 
  }