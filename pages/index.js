import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { PrismaClient } from "@prisma/client"
import prisma from '../lib/prisma.js'
import PickOrder from '../components/PickOrder.jsx'
import LayoutGrid from '../components/LayoutGrid.jsx'


export default function Home({users}) {
  return (
  <LayoutGrid users={users}>
  </LayoutGrid>
)
}

export const getServerSideProps  = async () => {
  const users = await prisma.user.findMany();
  return { 
    props: {
     users 
    }, 
  };
};
