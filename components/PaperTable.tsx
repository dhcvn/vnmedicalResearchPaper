
import React from 'react';
import { Paper } from '../types';

interface PaperTableProps {
  papers: Paper[];
}

const PaperTable: React.FC<PaperTableProps> = ({ papers }) => {
  return (
    <div className="overflow-x-auto bg-slate-800 rounded-lg shadow-lg border border-slate-700">
      <table className="min-w-full divide-y divide-slate-700">
        <thead className="bg-slate-900/50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
              Title
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
              Authors
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
              Journal
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
              Published
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
              Links
            </th>
          </tr>
        </thead>
        <tbody className="bg-slate-800 divide-y divide-slate-700">
          {papers.map((paper, index) => (
            <tr key={`${paper.TitleURL}-${index}`} className="hover:bg-slate-700/50 transition-colors">
              <td className="px-6 py-4 whitespace-normal text-sm font-medium text-sky-400">
                <a href={paper.TitleURL} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {paper.Title}
                </a>
              </td>
              <td className="px-6 py-4 whitespace-normal text-sm text-slate-400">
                {paper.Authors}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-400">
                {paper.Journal}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-400">
                {paper.PublishedDate}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                {paper.PdfURL && (
                  <a
                    href={paper.PdfURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 hover:underline"
                  >
                    View PDF
                  </a>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaperTable;
