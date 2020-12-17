import useFirebaseMethods from "./useFirebaseMethods";

const useDate = () => {
  const { allReviews } = useFirebaseMethods();

  const allDates = allReviews.map(({ completeDate }) => completeDate);

  const getTime = (options) =>
    new Intl.DateTimeFormat("en-US", options).format(new Date());

  console.log(allDates);

  let weekDay = getTime({ weekday: "long" });
  let numDay = getTime({ day: "numeric" });
  let month = getTime({ month: "long" });
  let year = getTime({ year: "numeric" });

  let completeDate = `${weekDay} ${month} ${numDay}, ${year}`;

  const submitAllowed =
    !allDates.includes(completeDate) && weekDay === "Friday";

  return { weekDay, numDay, month, year, completeDate, submitAllowed };
};

export default useDate;
