// Utility functions to parse speech input for different sections

export const parsePersonalInformation = (transcript) => {
  const result = {
    name: '',
    position: '',
    contactInformation: '',
    email: '',
    address: ''
  };

  const text = transcript.toLowerCase();

  // Extract name - look for patterns like "my name is", "I am", "this is"
  const namePatterns = [
    /(?:my name is|i am|this is|i'm)\s+([a-zA-Z\s]+?)(?:\s+and|,|\.|$)/i,
    /^([a-zA-Z\s]+?)(?:\s+and|,|\.|$)/i
  ];
  
  for (const pattern of namePatterns) {
    const nameMatch = transcript.match(pattern);
    if (nameMatch && nameMatch[1]) {
      result.name = nameMatch[1].trim();
      break;
    }
  }

  // Extract job title/position
  const positionPatterns = [
    /(?:i am a|i'm a|i work as|my job is|my position is|my title is)\s+([^,.]+)/i,
    /(?:software engineer|developer|designer|manager|analyst|consultant|teacher|nurse|doctor|lawyer|accountant|marketing|sales|hr|human resources)/i
  ];
  
  for (const pattern of positionPatterns) {
    const positionMatch = transcript.match(pattern);
    if (positionMatch) {
      if (positionMatch[1]) {
        result.position = positionMatch[1].trim();
      } else {
        result.position = positionMatch[0].trim();
      }
      break;
    }
  }

  // Extract phone number
  const phonePattern = /(?:phone|number|contact|call me at|my number is)\s*(?:is\s*)?(?:at\s*)?([+]?[\d\s\-\(\)]{10,})/i;
  const phoneMatch = transcript.match(phonePattern);
  if (phoneMatch && phoneMatch[1]) {
    result.contactInformation = phoneMatch[1].replace(/\s+/g, '').trim();
  }

  // Extract email
  const emailPattern = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/i;
  const emailMatch = transcript.match(emailPattern);
  if (emailMatch && emailMatch[1]) {
    result.email = emailMatch[1].trim();
  }

  // Extract address - look for city, state patterns
  const addressPatterns = [
    /(?:i live in|my address is|located in|from)\s+([^,.]+(?:,\s*[^,.]+)*)/i,
    /([A-Za-z\s]+,\s*[A-Z]{2})/i, // City, State format
    /([A-Za-z\s]+\s+\d{5})/i // City ZIP format
  ];
  
  for (const pattern of addressPatterns) {
    const addressMatch = transcript.match(pattern);
    if (addressMatch && addressMatch[1]) {
      result.address = addressMatch[1].trim();
      break;
    }
  }

  return result;
};

export const parseEducation = (transcript) => {
  const result = {
    school: '',
    degree: '',
    startYear: '',
    endYear: ''
  };

  const text = transcript.toLowerCase();

  // Extract school/university name
  const schoolPatterns = [
    /(?:i studied at|i went to|i attended|from|at)\s+([^,.]+?(?:university|college|institute|school|academy))/i,
    /(?:university|college|institute|school|academy)\s+(?:of\s+)?([^,.]+)/i
  ];
  
  for (const pattern of schoolPatterns) {
    const schoolMatch = transcript.match(pattern);
    if (schoolMatch && schoolMatch[1]) {
      result.school = schoolMatch[1].trim();
      break;
    }
  }

  // Extract degree
  const degreePatterns = [
    /(?:bachelor|master|phd|doctorate|associate|diploma)\s*(?:of\s*|in\s*|'s\s*)?([^,.]+)/i,
    /(?:b\.?a\.?|b\.?s\.?|m\.?a\.?|m\.?s\.?|m\.?b\.?a\.?|ph\.?d\.?)\s*(?:in\s*)?([^,.]+)/i,
    /(?:degree in|studied|major in|majored in)\s+([^,.]+)/i
  ];
  
  for (const pattern of degreePatterns) {
    const degreeMatch = transcript.match(pattern);
    if (degreeMatch) {
      if (degreeMatch[1]) {
        result.degree = degreeMatch[0].trim();
      } else {
        result.degree = degreeMatch[0].trim();
      }
      break;
    }
  }

  // Extract years
  const yearPattern = /(?:from\s+)?(\d{4})(?:\s*to\s*|\s*-\s*|\s+to\s+)(\d{4})/i;
  const yearMatch = transcript.match(yearPattern);
  if (yearMatch) {
    result.startYear = `${yearMatch[1]}-01-01`;
    result.endYear = `${yearMatch[2]}-12-31`;
  } else {
    // Look for single year mentions
    const singleYearPattern = /(?:graduated in|finished in|completed in)\s*(\d{4})/i;
    const singleYearMatch = transcript.match(singleYearPattern);
    if (singleYearMatch) {
      result.endYear = `${singleYearMatch[1]}-12-31`;
      // Assume 4 years for bachelor's, 2 for master's
      const startYear = parseInt(singleYearMatch[1]) - (text.includes('master') || text.includes('mba') ? 2 : 4);
      result.startYear = `${startYear}-01-01`;
    }
  }

  return result;
};