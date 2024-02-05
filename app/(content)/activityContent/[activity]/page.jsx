'use client'
import React from 'react';
import FinalBattle from '@/components/GameDevComponents/FinalBattle';
import { useSession } from 'next-auth/react';
import { useSearchParams  } from 'next/navigation';
async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/activity/${id}`, {
    next: {
      revalidate: 0,
    },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

async function getSubject(id) {
  const res = await fetch(`http://localhost:3000/api/specificSubjectGaming/${id}`, {
    next: {
      revalidate: 0,
    },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

const BattleField = ({ params }) => {
  const { data: session } = useSession();
  const [data, setData] = React.useState(null);
  const [subject, setSubject] = React.useState(null);
  const searchParams = useSearchParams()
 
  const subId = searchParams.get('subId')




  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData(params.activity);
        const subjectData = await getSubject(subId);
        setData(result);
        setSubject(subjectData);
      } catch (error) {
        // Handle error, e.g., set an error state
        console.error(error.message);
      }
    };

    fetchData();
  }, [params.activity]);





  return (
    <div>
      {data && subject ? (
        <FinalBattle subjectTheme={subject.realm} character={session.user.character} userId={session.user.id} data={data} />
      ) : (
        // Loading state or error handling
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BattleField;
