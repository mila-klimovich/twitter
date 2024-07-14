export default function convertTime(postDate, currentDate) {
  let result = '';
  const timeDifferenceInMinutes = Math.floor(currentDate - postDate) / 60000;

  if (timeDifferenceInMinutes === 1) {
    result = `${timeDifferenceInMinutes} minute ago`;
  } else if (timeDifferenceInMinutes > 1 && timeDifferenceInMinutes < 60) {
    result = `${timeDifferenceInMinutes} minutes ago`;
  } else if (timeDifferenceInMinutes === 60) {
    result = '1 hour ago';
  } else if (timeDifferenceInMinutes > 60 && timeDifferenceInMinutes < 1440) {
    result = `${Math.floor(timeDifferenceInMinutes / 60)} hours ago`;
  } else if (timeDifferenceInMinutes >= 1440 && timeDifferenceInMinutes < 2880) {
    result = '1 day ago';
  } else if (timeDifferenceInMinutes >= 2880 && timeDifferenceInMinutes < 525600) {
    result = `${Math.floor(timeDifferenceInMinutes / 1440)} days ago`;
  } else if (timeDifferenceInMinutes >= 525600 && timeDifferenceInMinutes < 1051200) {
    result = '1 year ago';
  } else if (timeDifferenceInMinutes > 1051200) {
    result = `${Math.floor(timeDifferenceInMinutes / 525600)} years ago`;
  }
  return result;
}
