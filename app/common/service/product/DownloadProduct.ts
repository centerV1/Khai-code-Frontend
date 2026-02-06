export const getDownloadUrl = async (productId: number) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/purchases/file/${productId}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`, 
    },
  });

  if (!response.ok) {
    throw new Error('ไม่สามารถรับลิงก์ดาวน์โหลดได้');
  }

  return response.json();
};